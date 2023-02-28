import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TestStatus }  from './test-statusl';


@Entity({ name: 'test' })
class Test {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public title: string;

  @Column()
  public content: string;

  @Column()
  public status : TestStatus.OPEN;
}

export default Test;

