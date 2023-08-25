import { VaultItem } from "@/models/BoxResponse";

export interface VaultListProps {
  data: VaultItem[] | undefined;
  id: number;
}
