import React from "react";
export const Settings = ()=>{
    return <div className="row">
        <div className="col-10">
            <p> Имя: Иван
                <span className="edit-btn"> [изменить]</span>
                <span className="save-btn">[сохранить]</span>
                <span className="cancel-btn">[отменить]</span>
            </p>
            <p>
                Фамилия: Иванов
                <span className="edit-btn"> [изменить]</span>
                <span className="save-btn">[сохранить]</span>
                <span className="cancel-btn">[отменить]</span>
            </p>
            <p>
                ID:
            </p>
        </div>
    </div>
}