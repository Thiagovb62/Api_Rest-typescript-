import { Schema, model , Document} from 'mongoose'


interface UserInterface extends Document{
  email ?: string,
  fistName : string,
  lastName ?: String
  fullName() : String
}

const UserSchema = new Schema({
  email: String,
  fistName: String,
  lastName: String
}, {
  timestamps: true
}) 

UserSchema.methods.fullName = function (): String{
return this.fistName + ' ' + this.lastName

}

export default model<UserInterface>('User', UserSchema)
