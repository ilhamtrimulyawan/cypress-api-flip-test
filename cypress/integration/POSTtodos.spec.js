describe('Testing api', () => {
    context('GET /todos', () => {
        it('should get todos with status completed', () => {
            cy.request({
                method: 'PATCH',
                url: 'https://gorest.co.in/public/v1/posts/1128',
                headers: {
                	'authorization' : "Bearer a3859efbb2e12e26813836abeabe515e4d685c99ed80406d9415862abe35bbef"
                },
                body: {
                  "body" : "Edit comment for id 1128"
                }
             }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.data.id).to.eq(1128);
                expect(response.body.data.body).to.eq("Edit comment for id 1128");
                expect(response.body.data.title).to.not.be.null;

            })
        })
    })
})