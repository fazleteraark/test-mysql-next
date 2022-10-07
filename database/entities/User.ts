
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm'

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  userId!: string

  @Column()
  firstName!: string

  @Column()
  lastName!: string
}
