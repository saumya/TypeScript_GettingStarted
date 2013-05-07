/**
 * ...
 * @author saumya
 */
 
 /// <reference path="Person.ts" />
 /// <reference path="Animal.ts" />
class Main 
{
	
	static main():void 
	{	
		var p = new Social.Person('Joe',20);
		p.shout('Hello World!');
		var a = new Social.Animal('Dog',2);
		a.shout();
		p.getPlanetName();
		a.getPlanetName();
	}
	
	
	
}
