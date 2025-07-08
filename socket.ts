import { GamePhase, IFigure, IPlayer } from "./interfaces.js";

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
  OFFLINE = "offline",
  JOIN_GAME = "join-game",
  TURN_UPDATE = "turn-update",
  // Auto play controller events
  AUTO_PLAY_STATUS = "auto-play-status",
  CLAIM_AUTO_PLAY = "claim-auto-play",
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

export interface IJoinGameResponse {
  gameId: string;
  player: IPlayer; // The player who just joined or triggered the event
  onlinePlayers: string[];
}

export interface IGameBattlePayload {
  attacker: number;
  defender: number;
  playerIndex: number;
}

export interface IGameBattleResponse {
  figures: [IFigure, IFigure];
  winner: number;
  attackerRoll: number;
  defenderRoll: number;
  defeatedPlayerIndex?: number; // Include if a player was defeated
}

export interface INextTurnPayload {
  currentPlayerIndex: number;
  supplyAmount: number;
}

export interface INextTurnResponse {
  playerFigures: Array<Pick<IFigure, "config" | "dice">>;
  newPlayerIndex: number;
  turnCount: number;
  gamePhase: GamePhase;
}

export interface IAutoPlayStatus {
  controllerId: string | null;
  enabled: boolean;
}

export interface IAutoPlayClaimPayload {
  gameId: string;
  enable: boolean; // true to claim, false to release
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
