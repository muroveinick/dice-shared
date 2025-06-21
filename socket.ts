import { IFigure } from "./interfaces.js";

/**
 * Socket.io event names used for communication between client and server
 */
export enum SocketEvents {
  // Connection events
  CONNECT = "connect",
  DISCONNECT = "disconnect",
  CONNECT_ERROR = "connect_error",
  ERROR = "error",

  // Game-specific events
  JOIN_GAME = "join-game",
  GAME_UPDATE = "game-update",
  TURN_UPDATE = "turn-update",
  // NEXT_TURN = 'next-turn',
}

export enum TurnMessageType {
  MESSAGE_TYPE_NEXT_TURN = "NEXT_TURN",
  MESSAGE_TYPE_TURN_UPDATE = "TURN_UPDATE",
}

export interface IMessage {
  type: string;
  gameId: string;
}

/**
 * Socket.io event payload interfaces
 */
export interface IJoinGamePayload {
  gameId: string;
  userId: string;
}

export interface IGameBattlePayload {
  attacker: number;
  defender: number;
}

export interface IGameBattleResponse {
  // attacker: IPlayer;
  // defender: IPlayer;
  figures: [IFigure, IFigure];
  winner: number;
  attackerRoll: number;
  defenderRoll: number;
}

export interface INextTurnPayload {
  // gameId: string;
  currentPlayerIndex: number;
  supplyAmount: number;
}

export interface INextTurnResponse {
  playerFigures: Array<Pick<IFigure, "config" | "dice">>;
  newPlayerIndex: number;
  turnCount: number;
  defeatedPlayerIndex?: number; // Include if a player was defeated
  gamePhase: string;
}

export interface ITurnUpdateResponse extends IMessage {
  type: TurnMessageType;
  data: INextTurnResponse | IGameBattleResponse;
}

export interface ITurnUpdatePayload extends IMessage {
  type: TurnMessageType;
  gameId: string;
  data: IGameBattlePayload | INextTurnPayload;
}

// export interface IGameUpdatePayload {
//   type: typeof SocketEvents.MESSAGE_TYPE_GAME_UPDATE;
//   gameId: string;
//   game: any; // This would typically be the full game object
// }
