import * as React from "react";
import styles from "./SpfxCrudReactPnp.module.scss";
import { ISpfxCrudReactPnpProps } from "./ISpfxCrudReactPnpProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";

export default class SpfxCrudReactPnp extends React.Component<
  ISpfxCrudReactPnpProps,
  {}
> {
  public render(): React.ReactElement<ISpfxCrudReactPnpProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName,
    } = this.props;

    return (
      <div className={styles.spfxCrudReactPnp}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.itemField}>
                <div className={styles.fieldLabel}>ID:</div>
                <input type="text" id="itemId"></input>
              </div>
              <div className={styles.itemField}>
                <div className={styles.fieldLabel}>Title</div>
                <input type="text" id="title"></input>
              </div>
              <div className={styles.itemField}>
                <div className={styles.fieldLabel}>SoftwareName</div>
                <input type="text" id="name"></input>
              </div>
              <div className={styles.itemField}>
                <div className={styles.fieldLabel}>All Items:</div>
                <div id="allItems"></div>
              </div>
              <div className={styles.buttonSection}>
                <div className={styles.button}>
                  <span className={styles.label} onClick={this.createItem}>
                    Create
                  </span>
                </div>
                <div className={styles.button}>
                  <span className={styles.label} onClick={this.getItemById}>
                    Read
                  </span>
                </div>
                <div className={styles.button}>
                  <span className={styles.label} onClick={this.getAllItems}>
                    Read All
                  </span>
                </div>
                <div className={styles.button}>
                  <span className={styles.label} onClick={this.updateItem}>
                    Update
                  </span>
                </div>
                <div className={styles.button}>
                  <span className={styles.label} onClick={this.deleteItem}>
                    Delete
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  //Create Item
  private createItem = async () => {
    try {
      const addItem = await sp.web.lists.getByTitle("Test").items.add({
        Title: document.getElementById("title")["value"],
        SoftwareName: document.getElementById("name")["value"]
      });
      console.log(addItem);
      alert(`Item created successfully with ID: ${addItem.data.ID}`);
    } catch (e) {
      console.error(e);
    }
  }

  //Get Item by ID
  private getItemById = async () => {
    try {
      const id: number = document.getElementById("itemId")["value"];
      if (id > 0) {
        const item: any = await sp.web.lists
          .getByTitle("Test")
          .items.getById(id)
          .get();
        document.getElementById("title")["value"] = item.Title;
        document.getElementById("name")["value"] = item.SoftwareName;
      } else {
        alert(`Please enter a valid item id.`);
      }
    } catch (e) {
      console.error(e);
    }
  }

  //Get all items
  private getAllItems = async () => {
    try {
      const items: any[] = await sp.web.lists.getByTitle("Test").items.get();
      console.log(items);
      if (items.length > 0) {
        var html = `<table><tr><th>ID</th><th>Title</th><th>SoftwareName</th></tr>`;
        items.map((item, index) => {
          html += `<tr><td>${item.ID}</td><td>${item.Title}</td><td>${item.SoftwareName}</td></li>`;
        });
        html += `</table>`;
        document.getElementById("allItems").innerHTML = html;
      } else {
        alert(`List is empty.`);
      }
    } catch (e) {
      console.error(e);
    }
  }

  //Update Item
  private updateItem = async () => {
    try {
      const id: number = document.getElementById("itemId")["value"];
      if (id > 0) {
        const itemUpdate = await sp.web.lists
          .getByTitle("Test")
          .items.getById(id)
          .update({
            Title: document.getElementById("title")["value"],
            SoftwareName: document.getElementById("name")["value"],
          });
        console.log(itemUpdate);
        alert(`Item with ID: ${id} updated successfully!`);
      } else {
        alert(`Please enter a valid item id.`);
      }
    } catch (e) {
      console.error(e);
    }
  }

  //Delete Item
  private deleteItem = async () => {
    try {
      const id: number = parseInt(document.getElementById("itemId")["value"]);
      if (id > 0) {
        let deleteItem = await sp.web.lists
          .getByTitle("Test")
          .items.getById(id)
          .delete();
        console.log(deleteItem);
        alert(`Item ID: ${id} deleted successfully!`);
      } else {
        alert(`Please enter a valid item id.`);
      }
    } catch (e) {
      console.error(e);
    }
  }
}
