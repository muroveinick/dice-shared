import { ColorKey } from "./data.js";
export type ObjectId = string;

interface IGrid {
  cols: number;
  rows: number;
}

export interface IHex {
  _id?: { _id: string };
  coordinates: {
    col: number;
    row: number;
  };
  parent: number; // Reference to Figure document
}

export interface IFigure {
  config: {
    color: ColorKey;
    initialHex: IHex;
    index: number;
  };
  linked_hexes: Array<IHex>;
  dice: number;
  center: {
    col: number;
    row: number;
  };
}

export interface IPlayer {
  id?: string;
  config: {
    color: ColorKey;
    isAuto: boolean;
  };
  figures: Array<number>;
}

export interface IGame {
  _id: ObjectId;
  name: string;
  players: IPlayer[];
  currentPlayerIndex: number;
  gamePhase: "SETUP" | "PLAYING" | "FINISHED";
  turnCount: number;
  grid: IGrid;
  figures: IFigure[];
  createdAt: Date;
  lastActivity: Date;
}

export interface IUserScheme {
  _id: ObjectId;
  email: string;
  password: string;
  username: string;
  role: "user" | "admin";
  createdAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

export interface IUser {
  id: string;
  email: string;
  username: string;
  role: string;
}

export interface ILoginResponse {
  status: string;
  token: string;
  user: IUser;
}

export interface IJoinGameResponse {
  gameId: string;
  player: IPlayer;
  user: Pick<IUser, "id" | "username">;
}

export interface ErrorResponse {
  status: string;
  message: string;
  code?: string;
  details?: any;
}
