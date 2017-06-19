import { Config } from '../config';
import { Encoding } from './../encoding';
import { Field, PositionFieldDef } from './../fielddef';
import { MarkConfig } from './../mark';
import { GenericUnitSpec, LayerSpec } from './../spec';
import { Orient } from './../vega.schema';
export declare const BOXPLOT: 'box-plot';
export declare type BOXPLOT = typeof BOXPLOT;
export declare type BoxPlotRole = 'boxWhisker' | 'box' | 'boxMid';
export interface BoxPlotDef {
    type: BOXPLOT;
    orient: Orient;
}
export declare function isBoxPlotDef(mark: BOXPLOT | BoxPlotDef): mark is BoxPlotDef;
export declare const BOXPLOT_ROLES: BoxPlotRole[];
export interface BoxPlotConfig extends MarkConfig {
    /** Size of the box and mid tick of a box plot */
    size?: number;
}
export interface BoxPlotConfigMixins {
    /** Box Config */
    box?: BoxPlotConfig;
    boxWhisker?: MarkConfig;
    boxMid?: MarkConfig;
}
export declare const VL_ONLY_BOXPLOT_CONFIG_PROPERTY_INDEX: {
    [k in keyof BoxPlotConfigMixins]?: (keyof BoxPlotConfigMixins[k])[];
};
export declare function normalizeBoxPlot(spec: GenericUnitSpec<Encoding<Field>, BOXPLOT | BoxPlotDef>, config: Config): LayerSpec;
export declare function box2DOrient(spec: GenericUnitSpec<Encoding<Field>, BOXPLOT | BoxPlotDef>): Orient;
export declare function box2DParams(spec: GenericUnitSpec<Encoding<Field>, BOXPLOT | BoxPlotDef>, orient: Orient): {
    discreteAxisFieldDef: PositionFieldDef<Field>;
    continuousAxisChannelDef: PositionFieldDef<Field>;
    discreteAxis: string;
    continuousAxis: string;
};
