import { Channel, ScaleChannel } from '../../channel';
import { LogicalOperand } from '../../logical';
import { SelectionDef, SelectionResolutions, SelectionTypes } from '../../selection';
import { Dict } from '../../util';
import { VgBinding, VgData, VgEventStream, VgSignalRef } from '../../vega.schema';
import { LayerModel } from '../layer';
import { Model } from '../model';
import { UnitModel } from '../unit';
import { SelectionComponent } from './selection';
export declare const STORE = "_store";
export declare const TUPLE = "_tuple";
export declare const MODIFY = "_modify";
export declare const SELECTION_DOMAIN = "_selection_domain_";
export interface SelectionComponent {
    name: string;
    type: SelectionTypes;
    events: VgEventStream;
    bind?: 'scales' | VgBinding | {
        [key: string]: VgBinding;
    };
    resolve: SelectionResolutions;
    project?: ProjectComponent[];
    fields?: any;
    scales?: Channel[];
    toggle?: any;
    translate?: any;
    zoom?: any;
    nearest?: any;
}
export interface ProjectComponent {
    field?: string;
    encoding?: ScaleChannel;
}
export interface SelectionCompiler {
    signals: (model: UnitModel, selCmpt: SelectionComponent) => any[];
    topLevelSignals?: (model: Model, selCmpt: SelectionComponent, signals: any[]) => any[];
    modifyExpr: (model: UnitModel, selCmpt: SelectionComponent) => string;
    marks?: (model: UnitModel, selCmpt: SelectionComponent, marks: any[]) => any[];
    predicate: string;
    scaleDomain: string;
}
export declare function parseUnitSelection(model: UnitModel, selDefs: Dict<SelectionDef>): Dict<SelectionComponent>;
export declare function assembleUnitSelectionSignals(model: UnitModel, signals: any[]): any[];
export declare function assembleTopLevelSignals(model: UnitModel, signals: any[]): any[];
export declare function assembleUnitSelectionData(model: UnitModel, data: VgData[]): VgData[];
export declare function assembleUnitSelectionMarks(model: UnitModel, marks: any[]): any[];
export declare function assembleLayerSelectionMarks(model: LayerModel, marks: any[]): any[];
export declare function predicate(model: Model, selections: LogicalOperand<string>): string;
export declare function isRawSelectionDomain(domainRaw: VgSignalRef): boolean;
export declare function selectionScaleDomain(model: Model, domainRaw: VgSignalRef): VgSignalRef;
export declare function channelSignalName(selCmpt: SelectionComponent, channel: Channel, range: 'visual' | 'data'): string;
