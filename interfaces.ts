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
  _id?: ObjectId;
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
  // verificationToken?: string;
  // resetPasswordToken?: string;
  // resetPasswordExpires?: Date;
  createdAt: Date;
}


export interface ErrorResponse {
  status: string;
  message: string;
  code?: string;
  details?: any;
}