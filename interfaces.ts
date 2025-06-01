export interface ObjectId {
  _id: string;
}

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
    color: string;
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
    color: string;
    isAuto: boolean;
  };
  figures: Array<number>;
}

export interface IGame {
  id: string;
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

export interface IUser {
  _id: string;
  email: string;
  password: string;
  username: string;
  role: "user" | "admin";
  createdAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

export interface ILoginResponse {
  status: string;
  token: string;
  user: {
    id: string;
    email: string;
    username: string;
    role: string;
  };
}

export interface ErrorResponse {
  status: string;
  message: string;
  code?: string;
  details?: any;
}
