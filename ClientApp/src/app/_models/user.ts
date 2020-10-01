import { Data } from "ngx-bootstrap/positioning/models";
import { Photo } from "./photo";

export interface User {
  id: number;
  username: string;
  lastActive: Date;
  photoUrl: string;
  city: string;
  introduction?: string;
  photos?: Photo[];
}
