import { ColorKey } from "./data.js";
import { Types } from "mongoose";
export type ObjectId = Types.ObjectId;

export type GamePhase = "SETUP" | "PLAYING" | "FINISHED";

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
  config: {
    color: ColorKey;
    isAuto: boolean;
    isDefeated?: boolean;
  };
  figures: Array<number>;
  user?: {
    id: ObjectId;
    username: string;
  };
}

export interface IGame {
  _id: ObjectId;
  name: string;
  players: IPlayer[];
  currentPlayerIndex: number;
  gamePhase: GamePhase;
  turnCount: number;
  grid: IGrid;
  figures: IFigure[];
  createdAt: Date;
  lastActivity: Date;
  autoPlayControllerId?: string | null;
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
  token?: string;
  user: IUser;
}

export interface ErrorResponse {
  status: string;
  message: string;
  code?: string;
  details?: any;
}
