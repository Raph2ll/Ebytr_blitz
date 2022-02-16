const statusCodes = require('http-status-codes').StatusCodes;
const frisby = require('frisby');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const mongoDbUrl = `mongodb://${process.env.HOST || 'localhost'}:27017/Cookmaster`;
const url = 'http://localhost:3001';

describe('1 - Crie um endpoint para criar tarefas', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(mongoDbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = connection.db('Ebyrt');
  });

  beforeEach(async () => {
    await db.collection('Ebyrt').deleteMany({});
  });

  afterAll(async () => {
    await connection.close();
  });

  it('Será validado que não é possível criar uma tarefa sem o campo "task"', async () => {
    await frisby
      .post(`${url}/tasks/`,
        {
          task: '',
        })
      .expect('status', statusCodes.BAD_REQUEST)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.message).toBe('Invalid entries. Try again.');
      })
    })

  it('Será validado que é possível criar uma tarefa', async () => {
    await frisby
      .post(`${url}/tasks/`,
        {
          task: 'Beber água',
        })
      .expect('status', statusCodes.CREATED)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.task).toBe('Beber água');
      })
    })
  })

  describe('2 - Crie um endpoint para a listagem de tarefas', () => {
    let connection;
    let db;
  
    beforeAll(async () => {
      connection = await MongoClient.connect(mongoDbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      db = connection.db('Ebyrt');
    });
  
    beforeEach(async () => {
      await db.collection('Ebyrt').deleteMany({});
      const tasks = [
        {
          task: 'Levar o cachorro pra pasear',
        },
      ];
      await db.collection('Ebyrt').insertMany(tasks);
    });
  
    afterAll(async () => {
      await connection.close();
    });
  
    it('Será validado que é possível listar todas as tarefas', async () => {
      await frisby
        .get(`${url}/tasks/`)
        .expect('status', statusCodes.OK)
        .then((response) => {
          const { body } = response;
          const result = JSON.parse(body);
          expect(result[0].task).toBe('Levar o cachorro pra pasear');
        });
    });
  })
describe('3 - Crie um endpoint para visualizar uma tarefa específica', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(mongoDbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = connection.db('Ebyrt');
  });

  beforeEach(async () => {
    await db.collection('Ebyrt').deleteMany({});
  });

  afterAll(async () => {
    await connection.close();
  });

  it('Será validado que é possível listar uma tarefa específica', async () => {
    let resultTask;

    await frisby
      .post(`${url}/tasks`, {
        task: 'Escovar os dentes',
      },)
      .expect('status', statusCodes.CREATED)
      .then((responseRecipe) => {
        const { body } = responseRecipe;
        resultTask = JSON.parse(body);
      });
    return frisby
      .get(`${url}/tasks/${resultTask._id}`)
      .expect('status', statusCodes.OK)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result).toHaveProperty('_id');
        expect(result.task).toBe('Escovar os dentes');
      });
  });

  it('Será validado que não é possivel listar uma tarefa que não existe', async () => {
    await frisby
      .post(`${url}/tasks`, {
        task: 'Ler livros',
      },)
      .expect('status', statusCodes.CREATED)
      .then((responseRecipe) => {
        const { body } = responseRecipe;
        resultTask = JSON.parse(body);
      });
    return frisby
      .get(`${url}/tasks/9999`)
      .expect('status', statusCodes.NOT_FOUND)
      .then((responseRecipes) => {
        const { json } = responseRecipes;
        expect(json.message).toBe('task not found');
      });
  })
});