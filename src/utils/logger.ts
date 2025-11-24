/* eslint-disable @typescript-eslint/no-explicit-any */

type LogLevel = 'info' | 'warn' | 'error' | 'success';

export class Logger {
  private static prefix = '[Dashboard]';

  static log(level: LogLevel, message: string, data?: any) {
    const emoji = {
      info: 'ℹ️',
      warn: '⚠️',
      error: '❌',
      success: '✅',
    };

    const method = level === 'error' ? 'error' : level === 'warn' ? 'warn' : 'log';
    
    console[method](`${emoji[level]} ${this.prefix} ${message}`, data || '');
  }

  static info(message: string, data?: any) {
    this.log('info', message, data);
  }

  static warn(message: string, data?: any) {
    this.log('warn', message, data);
  }

  static error(message: string, data?: any) {
    this.log('error', message, data);
  }

  static success(message: string, data?: any) {
    this.log('success', message, data);
  }
}