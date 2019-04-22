export interface WidgetType {
  label: string;
  value: string;
  component?: any;
}

export interface Widget {
  componentType: string;
  data?: DataArray[];
  // formGroup: FormGroup;
  // formItem: FormItem;
}

export interface DataArray {
  firstTitle?: string;
  childList?: DataArray[];
}

export interface ChartData {
  year: string;
  value: number;
}

