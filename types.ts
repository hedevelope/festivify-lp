export interface GeneratedAsset {
  key: string;
  data: string | null; // Base64 string
  loading: boolean;
  prompt: string;
  width?: string;
  height?: string;
}

export interface AssetState {
  [key: string]: GeneratedAsset;
}

export enum ThemeColor {
  RED = 'text-christmas-red',
  GREEN = 'text-christmas-green',
  GOLD = 'text-christmas-gold'
}