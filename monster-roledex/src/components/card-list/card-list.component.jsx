import React from "react";
import { Card } from "../card/card.component.jsx";

export  const CardList = (props) => (
    <div className="row">
        {props.monsters.map((monster) => (
            <Card key={monster.id} monster={monster}/>
        ))}
    </div>
);