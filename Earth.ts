/**
 * ...
 * @author saumya
 */
/// <reference path="IPlanet.ts" />
module Social{
	
	export class Earth implements IPlanet{
		name:string='Earth';
		age:number=100000;
		constructor (){
			//Empty
		}
		public getPlanetName():string{
			return this.name;
		}
		public increaseAge():void{
			this.age++;
		}
		//extra method
		public getAge():number{
			return this.age;
		}
		
	}
}

