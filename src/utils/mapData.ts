import { BoxRoot2, VaultItem } from "@/models/BoxResponse";
import { formatDistanceToNow } from "date-fns";
import { filesize } from "filesize";

export const mapVaultItems = (entries?: BoxRoot2["boxData"]["entries"]) => {
  return entries?.map((item) => {
    return {
      id: item.id,
      name: item.name,
      type: item.type,
      size: filesize(item.size, { base: 10, standard: "jedec" }),
      time: formatDistanceToNow(new Date(item.modified_at), {
        addSuffix: true,
      }),
      control: {
        can_delete: item.permissions.can_delete,
        can_download: item.permissions.can_download,
        can_invite_collaborator: item.permissions.can_invite_collaborator,
        can_rename: item.permissions.can_rename,
        can_set_share_access: item.permissions.can_set_share_access,
        can_share: item.permissions.can_share,
        can_upload: item.permissions.can_upload,
      },
    } as VaultItem;
  });
};

export const getBreadCrumb = (entries?: BoxRoot2["boxData"]["entries"]) => {
  return entries?.[0].path_collection;
};

export const getLastIndex = (entries?: BoxRoot2["boxData"]["entries"]) => {
  const lastIndex =
    entries?.[0].path_collection.entries &&
    entries[0].path_collection.entries.length > 1
      ? parseInt(
          entries[0].path_collection.entries[
            entries[0].path_collection.entries.length - 2
          ].id
        )
      : -1;
  return lastIndex;
};
