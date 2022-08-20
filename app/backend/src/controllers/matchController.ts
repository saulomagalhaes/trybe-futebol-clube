import { Request, Response } from 'express';
import 'express-async-errors';
import { IMatchService } from '../interfaces/IMatchService';

export default class MathController {
  constructor(private _matchService: IMatchService) {}

  public getAll = async (req: Request, res: Response): Promise<void> => {
    const matches = await this._matchService.getAll();
    res.status(200).json(matches);
  };
}