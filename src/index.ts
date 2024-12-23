import Fastify from 'fastify'


async function main() {
    const app = Fastify({
      logger: true
    })

    app.get('/', async (request, reply) => {
      request.log.info('Some info about the request')
      return { hello: 'world' }
    })

    await app.ready()

    await app.listen({ host: '0.0.0.0', port: 3000 })
}

main()
