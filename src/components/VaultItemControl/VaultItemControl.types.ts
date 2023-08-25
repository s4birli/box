export interface VaultItemControlProps {
  isFile: boolean;
  control: {
    can_delete: boolean;
    can_download: boolean;
    can_invite_collaborator: boolean;
    can_rename: boolean;
    can_set_share_access: boolean;
    can_share: boolean;
    can_upload: boolean;
  };
  id: number;
}
