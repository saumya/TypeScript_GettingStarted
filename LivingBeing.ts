/**
 * ...
 * @author saumya
 */
/// <reference path="iPlanet.ts" />
/// <reference path="Earth.ts" />
module Social{
	
	export class LivingBeing {
		private planet : Social.IPlanet;
		private name : string;
		private age : number;
		
		constructor(pName:string,pAge:number){	
			this.name=pName;
			this.age=pAge;
			//makes an Object of type IPlanet interface
			this.planet=new Social.Earth();
		};
		
		public getPlanetName():string{
			console.log('LivingBeing : getPlanetName : '+this.planet.getPlanetName());
			return this.planet.getPlanetName();
		}
		
		public getName():string{
			return this.name;
		}
		public getAge():number{
			return this.age;
		}
		
	}
}

