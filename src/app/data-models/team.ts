export interface Team {
  id: number;
  name: string;
  industry: string;
  members: Array<String>;
  creatorEmail: string;
  isAdmin: boolean;
}
