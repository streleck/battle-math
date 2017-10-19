export default {
  
monsters: [{
  name: "Trump",
  experience: 30,
  attack: ()=> {
    return(3 + Math.floor(2 * Math.random()))},
  img:"/images/trump5battle.png",
  HP: 10,
  maxHP: 10
},
{
  name: "Teenager",
  experience: 30,
  attack: ()=> {
    return(2 + Math.floor(2 * Math.random()))},
  img:"/images/Tiffany.png",
  HP: 12,
  maxHP: 12
},
{
  name: "Creepy Vampire",
  experience: 10,
  attack: ()=> {
    return(2 + Math.floor(2 * Math.random()))},
  img:"/images/Marshall_Lee.png",
  HP: 30,
  maxHP: 30
},
{
  name: "Bob",
  experience: 50,
  attack: ()=> {
    return(1 + Math.floor(1 * Math.random()))},
  img:"/images/Gnome_ruler.png",
  HP: 30,
  maxHP: 30
}]

}
