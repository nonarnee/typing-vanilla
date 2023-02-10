export interface ObjectNode {
  type: string;
  attributes: any;
  children: string | ObjectNode[];
}
