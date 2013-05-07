/**
 * ...
 * @author saumya
 */
/// <reference path="LivingBeing.ts" />
module Social{
	
	export class Animal extends Social.LivingBeing {
		
		constructor(pName:string,pAge:number){
			//mandatory
			super(pName,pAge);
		};
		
		public shout(){
			console.log(this.getName()+' : Shouting ');
			//console.log(this.name+' : Shouting ');//Wrong : since private property of parent object
		};
	}
}

