describe('Testing api', () => {
    const token = '0ffd7a72b3b88e6857bfca04bcb3013fcc6ec260dac312203a3e7815aa4dbcc9'; // Replace with your access token
    context('GET /todos', () => {
        it('Get todos with title containing "credo" and status "completed"', () => {
            cy.request({
              method: 'GET',
              url: 'https://gorest.co.in/public/v1/todos',
              headers: {
                Authorization: `Bearer ${token}`
              }
            }).then((response) => {
              expect(response.status).to.eq(200);
              cy.log(`Response Body: ${JSON.stringify(response.body.data)}`);
              const bodyData = response.body.data;
              const filteredTodos = bodyData.filter(todo => 
                todo.title.includes('astrum') && todo.status === 'completed'
              );
              filteredTodos.forEach(todo => {
                expect(todo.title).to.include('astrum');
                expect(todo.status).to.eq('completed');
                expect(todo.due_on).to.not.be.null;
                expect(todo.user_id).to.not.be.null;  
              });
            });
        });
    })
})