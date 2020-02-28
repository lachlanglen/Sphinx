const router = require('express').Router();
const { Channel, User, Message } = require('../db/index');
const USER_ID = require('../../utils')

router.get('/', (req, res, next) => {
  const userId = USER_ID
  // the above should eventually be changed to: const userId = req.user.id;
  User.findOne({
    where: {
      id: userId,
    }
  })
    .then(user => {
      if (user) {
        user.getChannels({
          include: [{
            model: Message,
          }]
        })
          .then(subscriptions => res.status(200).send(subscriptions))
          .catch(e => console.log('error finding subscriptions: ', e))
      } else {
        res.status(400).send('user not found')
      }
    })
});

router.get('/:id', (req, res, next) => {
  Channel.findByPk(req.params.id)
    .then(channel => {
      if (!channel) return res.status(404).send('Channel is not found!');
      res.status(200).send(channel);
    })
    .catch(e => {
      console.error(e);
      next(e);
    });
});

router.post('/', (req, res, next) => {
  Channel.create(req.body)
    .then(newChannel => {
      res.status(201).send(newChannel);
    })
    .catch(e => {
      console.error(e);
      next(e);
    });
});

router.put('/:id', (req, res, next) => {
  Channel.findByPk(req.params.id)
    .then(channel => {
      if (channel) {
        channel.update(req.body);
        return res.status(202).send(channel);
      }
      res.status(404);
    })
    .catch(e => {
      console.error(e);
      next(e);
    });
});

router.delete('/:id', (req, res, next) => {
  Channel.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(channelDelete => {
      if (channelDelete) return res.sendStatus(204);
      res.sendStatus(404);
    })
    .catch(e => {
      console.error(e);
      next(e);
    });
});

module.exports = router;
