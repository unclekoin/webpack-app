import { config } from "./config";

export default class AppService {
  constructor(text) {
    this.text = text;
  }

  log() {
    console.log('[App service]:', this.text)
  }
}