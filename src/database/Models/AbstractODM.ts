import {
  Model,
  Schema,
  model,
  isValidObjectId,
} from 'mongoose';

abstract class AbstractODM<T> {
  protected model: Model<T & Document>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model= model<T & Document>(this.modelName, this.schema);
  }

  public async find(): Promise<T[]> {
    return this.model.find();
  }

  public async findOne(data: T): Promise<T | null> {
    return this.model.findOne({ ...data });
  }

  public async findById(id: string): Promise<T> {
    return this.model.findOne({ _id: id }).select({ __v: 0 }).lean();
  }
  
  public async create(data: T): Promise<T> {
    return this.model.create({ ...data });
  }
  
  public async findOneAndUpdate(id: string, data: Partial<T>, obj: any): Promise<T | null> {
    if (!isValidObjectId(id)) return null;
  
    const result = await this.model.findByIdAndUpdate(id, data, { new: true });
    return result ? result.toObject() as T : null;
  }

  public async delete(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw Error('Invalid Mongo id');

    return this.model.findByIdAndDelete({ _id: id });
  }
}

export default AbstractODM;