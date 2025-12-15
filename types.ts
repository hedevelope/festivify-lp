export interface GeneratedAsset {
  key: string;
  data: string | null;
  loading: boolean;
  prompt: string;
  width?: string;
  height?: string;
}

export interface AssetState {
  [key: string]: GeneratedAsset;
}