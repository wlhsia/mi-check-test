const { Item } = require("../models");

const ItemController = {
  async createItem(req, res) {
    try {
      const item = await Item.create(req.body);
      res.status(201).json(item);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to create item" });
    }
  },
  async getItems(req, res) {
    try {
      const items = await Item.findAll({
        where: {
          itemType: req.query.itemType,
        },
      });
      res.json(items);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to get items" });
    }
  },
  async updateItem(req, res) {
    try {
      const { itemType, itemNo, item, standardNo, standard } = req.body;
      const updateItem = await Item.update(
        { itemType, itemNo, item, standardNo, standard },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.status(201).json(updateItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to update item" });
    }
  },
  async deleteItem(req, res) {
    try {
      const item = await Item.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(201).json(item);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to delete item" });
    }
  },
};

module.exports = ItemController;
