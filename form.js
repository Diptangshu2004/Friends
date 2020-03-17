class Form
{
  constructor()
  {
       this.input=createInput("Name")
  this.button=createButton('Play')
  this.greet=createElement('h3')
  }
  hide()
  {
      this.greet.hide()
      this.button.hide()
      this.input.hide()
  }
  display()
  {
      var title=createElement('h2')
      title.html("Racing Game")
      title.position(displayWidth/2,10)
     
  this.input.position(displayWidth/2,displayHeight/2-100)
  this.button.position(displayWidth/2,displayHeight/2-50)
  this.button.mousePressed(()=>
  {
      this.input.hide()
      this.button.hide()
      player.name=this.input.value()
      playerCount+=1
      player.index=playerCount
      player.updateCount(playerCount)
      player.update()
      this.greet.html("Hello "+ player.name )
      this.greet.position(displayWidth/2,displayHeight/2-200)
  })
  }
}