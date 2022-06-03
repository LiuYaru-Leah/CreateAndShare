const supertest = require('supertest');
const chai = require('chai');
const expect = chai.expect;

const BASE_URL = 'http://localhost:8088';
const request = supertest(BASE_URL);

const mockUser = {
  username: Math.random().toString(16).slice(2),
  password: '123456',
};

describe('POST /api/user/register', function () {
  it('should succeed when registering with a random account', function (done) {
    request
      .post('/api/user/register')
      .send({
        username: mockUser.username,
        password: mockUser.password,
      })
      .expect(200, (err, res) => {
        expect(res.body.success).to.equal(true);
        done(err);
      });
  });

  it('should failed when registering with a same account', function (done) {
    request
      .post('/api/user/register')
      .send({
        username: mockUser.username,
        password: mockUser.password,
      })
      .expect(200, (err, res) => {
        expect(res.body.success).to.equal(false);
        done(err);
      });
  });
});

describe('POST /api/user/login', function () {
  it('should succeed when entered the correct username and password', function (done) {
    request
      .post('/api/user/login')
      .send({
        username: mockUser.username,
        password: mockUser.password,
      })
      .expect(200, (err, res) => {
        expect(res.body.success).to.equal(true);
        done(err);
      });
  });

  it('should failed when entered the incorrect username and password', function (done) {
    request
      .post('/api/user/login')
      .send({
        username: mockUser.username,
        password: 'wrongpassword',
      })
      .expect(200, (err, res) => {
        expect(res.body.success).to.equal(false);
        done(err);
      });
  });
});

let newArticle;
describe('POST /api/article/addNewArticle', function () {
  it('should succeed when add a new article', function (done) {
    request
      .post('/api/user/login')
      .send(mockUser)
      .expect(200, (err, res) => {
        const _uid = res.body.data.userInfo.id;
        const testTitle = 'test-article';
        const testContent = 'tet-content';
        request
          .post('/api/article/addNewArticle')
          .send({
            title: testTitle,
            content: testContent,
            userID: _uid,
            imgUrl: undefined,
          })
          .expect(200, (err, res) => {
            newArticle = res.body;
            expect(res.body.title).to.equal(testTitle, 'article title');
            expect(res.body.content).to.equal(testContent, 'article content');
            expect(res.body.userID).to.equal(_uid, 'article title');
            expect(res.body.imgUrl).be.undefined;
            done(err);
          });
      });
  });
});

describe('GET /api/article/detail', function () {
  it('should return 404 when article id does not exist', function (done) {
    request.get('/api/article/detail/').expect(404, (err, res) => {
      done(err);
    });
  });

  it('should succeed when article id exist', function (done) {
    request
      .get(`/api/article/detail/${newArticle?._id}`)
      .expect(200, (err, res) => {
        done(err);
      });
  });
});
