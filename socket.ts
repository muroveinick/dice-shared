/**
 * Socket.io event names used for communication between client and server
 */
export enum SocketEvents {
  // Connection events
  CONNECT = 'connect',
  DISCONNECT = 'disconnect',
  CONNECT_ERROR = 'connect_error',
  ERROR = 'error',

  // Game-specific events
  JOIN_GAME = 'join-game',
  GAME_UPDATE = 'game-update',
  TURN_UPDATE = 'turn-update',

  // Message types in payloads
  MESSAGE_TYPE_GAME_UPDATE = 'GAME_UPDATE',
  MESSAGE_TYPE_TURN_UPDATE = 'TURN_UPDATE'
}

/**
 * Socket.io event payload interfaces
 */
export interface IJoinGamePayload {
  gameId: string;
}


export interface IGameBattleResponse {
  attacker: number;
  defender: number;
  winner: number;
  attackerRoll: number;
  defenderRoll: number;
}

export interface IGameBattlePayload {
  attacker: number;
  defender: number;
}


export interface ITurnUpdatePayload {
  type: typeof SocketEvents.MESSAGE_TYPE_TURN_UPDATE;
  gameId: string;
  data: IGameBattlePayload;
}

export interface IGameUpdatePayload {
  type: typeof SocketEvents.MESSAGE_TYPE_GAME_UPDATE;
  gameId: string;
  game: any; // This would typically be the full game object
}
