describe('Testing api', () => {
    const token = '0ffd7a72b3b88e6857bfca04bcb3013fcc6ec260dac312203a3e7815aa4dbcc9'; // Replace with your access token
    const url = 'https://gorest.co.in/'
    const post_id = '140289'
    const randomNumber = getRandomNumber(3);

    function getRandomNumber(maxDigits) {
        return Math.floor(Math.random() * (10 ** maxDigits));
    }


    context('GET /todos', () => {
        it('should get todos with status completed', () => {
            const body = `[${randomNumber}]Edit comment for id  ${post_id}`
            cy.request({
                method: 'POST',
                url: `${url}public/v2/posts/${post_id}/comments`,
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: {
                    post_id: post_id,
                    name: 'Test User',
                    email: 'testuser@example.com',
                    body: body
                }
            }).then((response) => {
                expect(response.status).to.eq(201);
                cy.log(`Response Body: ${JSON.stringify(response.body)}`);
                expect(response.body.id).to.not.be.null;
                expect(response.body.body).to.eq(body);
                expect(response.body.name).to.not.be.null;

            })
        })
    })
})