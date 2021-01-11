
AFRAME.registerComponent("tour",{
    init:function(){
        this.placeContainer=this.El;
        this.createCards();
    },
    createCards:function(){
        const thumbnailref=[
            {
                
                id:"Taj-Mahal",
                title:"Taj Mahal",
                url:"./assets/taj_mahal.png"
            },
            {
                id:"Budapest",
                title:"Budapest",
                url:"./assets/budapest.jpg"
            },
            {
                id:"Eiffel-Tower",
                title:"Eiffel Tower",
                url:"./assets/eiffel_tower.png"
            },
            {
                id:"New-York-City",
                title:"New York City",
                url:"./assets/new_york_city"
            },
        ]
        let previousXpos=-60
        for(var item of thumbnailref){
            const posX=previousXpos+25
            const posY=10
            const posZ=-40
            const position={x:posX,y:posY,z:posZ}
            previousXpos=posX;
            const borderEl=this.createBorder(position,item.id);
            const thumbnail=this.createThumbnail(item);
            borderEl.appendChild(thumbnail);
            const titleEl=this.createTitleEl(position,item);
            borderEl.appendChild(titleEl);
            this.placeContainer.appendChild(borderEl)
        }

    },
    createBorder:function(position,id){
        const entityEl=document.createElement("a-entity")
        entityEl.setAttribute("id",id)
        entityEl.setAttribute("visible",true)
        entityEl.setAttribute("geometry",{
            primitive:"ring",
            radiusInner:9,
            radiusOuter:10

        });
        entityEl.setAtrribute("position",position)
        entityEl.setAttribute("material",{
            colour:"black",
            opacity:0.4
        });
        return entityEl
    },
createThumbnail:function(item){
    const entityEl=document.createElement("a-entity")
    entityEl.setAttribute("visible",true)
    entityEl.setAttribute("geometry",{
        primitive:"circle",
        radius:9

    });
    entityEl.setAttribute("material",{
        src:item.url
    });
    return entityEl
},
createTitleEl:function(position,item){
    const entityEl=document.createElement("a-entity")
    entityEl.setAttribute("visible",true)
    entityEl.setAttribute("text",{
        font:"exo2bold",
        align:"centre",
        width:60,
        color:black,
        value:item.title

    });
    const Elposition=position
    Elposition.Y=-20

       
    entryEl.setAtrribute("position",position)
    return entityEl
},


})


