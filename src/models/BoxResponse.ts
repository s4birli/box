export type ErrorState = {
  message: string;
};

export type BoxRoot = BoxRoot2[];

export interface BoxRoot2 {
  id: number;
  boxData: BoxData;
}

export interface BoxData {
  total_count: number;
  entries: Entry[];
  offset: number;
  limit: number;
  order: Order[];
}

export interface Entry {
  type: string;
  id: string;
  etag: string;
  name: string;
  permissions: Permissions;
  modified_at: string;
  tags: string[];
  parent?: Parent;
  created_at: string;
  owned_by: OwnedBy;
  size: number;
  path_collection: PathCollection;
  has_collaborations: boolean;
}

export interface Permissions {
  can_download: boolean;
  can_upload: boolean;
  can_rename: boolean;
  can_delete: boolean;
  can_share: boolean;
  can_invite_collaborator: boolean;
  can_set_share_access: boolean;
  can_preview?: boolean;
  can_comment?: boolean;
  can_annotate?: boolean;
  can_view_annotations_all?: boolean;
  can_view_annotations_self?: boolean;
  can_create_annotations?: boolean;
  can_view_annotations?: boolean;
}

export interface Parent {
  type: string;
  id: string;
  sequence_id: string;
  etag: string;
  name: string;
}

export interface OwnedBy {
  type: string;
  id: string;
  name: string;
  login: string;
}

export interface PathCollection {
  entries: Entry2[];
  total_count: number;
}

export interface Entry2 {
  type: string;
  id: string;
  sequence_id?: string;
  etag?: string;
  name: string;
}

export interface Order {
  by: string;
  direction: string;
}

export interface VaultItem {
  id: string;
  name: string;
  type: string;
  size: string;
  time: string;
  control: {
    can_delete: boolean;
    can_download: boolean;
    can_invite_collaborator: boolean;
    can_rename: boolean;
    can_set_share_access: boolean;
    can_share: boolean;
    can_upload: boolean;
  };
}
