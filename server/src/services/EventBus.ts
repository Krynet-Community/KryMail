import { EventEmitter } from "events";

export class EventBus {

  private emitter =
    new EventEmitter();


  emit(
    event: string,
    data: unknown
  ) {

    this.emitter.emit(
      event,
      data
    );

  }


  on(
    event: string,
    callback: Function
  ) {

    this.emitter.on(
      event,
      callback as any
    );

  }

}
