describe('Testing api', () => {
    context('GET /todos', () => {
        it('should get todos with status completed', () => {
            cy.request({
                method: 'GET',
                url: 'https://gorest.co.in/public/v1/todos?status=completed',
                headers: {
                	'authorization' : "Bearer a3859efbb2e12e26813836abeabe515e4d685c99ed80406d9415862abe35bbef"
                }
             }).then((response) => {
                expect(response.status).to.eq(200);
            })
        })
    })
})