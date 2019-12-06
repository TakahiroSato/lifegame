import { vec2 } from "@takahiro_sato/canvas2d";
import { c2d } from "./util";

enum STATE {
  die = 0,
  born = 1,
  live = 2,
  dying = 3
}

class Cell {
  public pos: vec2;
  public state: STATE;
  private _width: number;
  private _height: number;
  constructor(x: number, y: number, w: number, h: number) {
    this.pos = new vec2(x, y);
    this.state = STATE.die;
    this._width = w;
    this._height = h;
  }
  draw() {
    if (this.state) {
      let color = "#0000ff";
      if (this.state === STATE.born) color = "#00ffaa";
      if (this.state === STATE.dying) color = "#770000";
      c2d.fillRect({
        cx: this.pos.x,
        cy: this.pos.y,
        w: this._width,
        h: this._height,
        color: color
      });
    }
  }
}

class CellMgr {
  private _width: number;
  private _height: number;
  public _cells: Cell[][];
  constructor(
    width: number,
    height: number,
    cellWidth: number,
    cellHeight: number
  ) {
    this._width = width;
    this._height = height;
    this._cells = new Array();
    for (let y = 0; y < height; y++) {
      this._cells[y] = new Array();
      for (let x = 0; x < width; x++) {
        this._cells[y][x] = new Cell(
          x * cellWidth,
          y * cellHeight,
          cellWidth,
          cellHeight
        );
      }
    }
  }
  public update() {
    const nextCell: STATE[][] = new Array();
    for (let y = 0; y < this._height; y++) {
      nextCell[y] = new Array();
    }
    const f = (x: number, y: number) => {
      let ret = 0;
      const ymin = y > 0 ? y - 1 : 0;
      const ymax = y < this._height - 1 ? y + 1 : this._height - 1;
      const xmin = x > 0 ? x - 1 : 0;
      const xmax = x < this._width - 1 ? x + 1 : this._width - 1;
      for (let _y = ymin; _y <= ymax; _y++) {
        for (let _x = xmin; _x <= xmax; _x++) {
          if (x == _x && y == _y) continue;
          if ([STATE.born, STATE.live].includes(this._cells[_y][_x].state)) {
            ret++;
          }
        }
      }
      return ret;
    };
    for (let y = 0; y < this._height; y++) {
      for (let x = 0; x < this._width; x++) {
        switch (f(x, y)) {
          case 2:
            nextCell[y][x] = this._cells[y][x].state;
            if (nextCell[y][x] === STATE.born) nextCell[y][x] = STATE.live;
            if (nextCell[y][x] === STATE.dying) nextCell[y][x] = STATE.die;
            break;
          case 3:
            if (![STATE.born, STATE.live].includes(this._cells[y][x].state)) {
              nextCell[y][x] = STATE.born;
            } else {
              nextCell[y][x] = STATE.live;
            }
            break;
          case 0:
          case 1:
          default:
            if ([STATE.die, STATE.dying].includes(this._cells[y][x].state)) {
              nextCell[y][x] = STATE.die;
            } else {
              nextCell[y][x] = STATE.dying;
            }
            break;
        }
      }
    }
    this.set(nextCell);
  }
  public set(arr: STATE[][]) {
    for (let y = 0; y < arr.length; y++) {
      for (let x = 0; x < arr[y].length; x++) {
        this._cells[y][x].state = arr[y][x];
      }
    }
  }
  public random() {
    this._cells.map(c => {
      c.map(c => {
        c.state = Math.random() > 0.5 ? 1 : 0;
      });
    });
  }
  public init() {
    this._cells.map(c => {
      c.map(c => (c.state = STATE.die));
    });
  }
  public draw() {
    this._cells.map(c => {
      c.map(c => c.draw());
    });
  }
}

const cells = new CellMgr(216, 144, 5, 5);

export function set(arr: STATE[][]) {
  const _paddingx = 20;
  const _paddingy = 10;
  cells.init();
  for (let y = 0; y < arr.length; y++) {
    for (let x = 0; x < arr[y].length; x++) {
      cells._cells[y + _paddingy][x + _paddingx].state = arr[y][x];
    }
  }
}

export function random() {
  cells.random();
}

export function update() {
  cells.update();
}

export function draw() {
  cells.draw();
}
