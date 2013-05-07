/**
 * ...
 * @author saumya
 */
/// <reference path="LivingBeing.ts" />
module Social{
	
	export class Person extends Social.LivingBeing {
		
		constructor(pName:string,pAge:number){
			//mandatory
			super(pName,pAge);
		};
		
		public shout(message:string){
			console.log(this.getName()+' : '+message);
		};
	}
}

