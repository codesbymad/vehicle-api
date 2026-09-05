const swaggerDocument = {
    openapi: '3.0.0',

    info: {
        title: 'API de gestão e aluguel de veículos',
        description: 'API RESTful para gerenciamento de frota e sistema de aluguel de veículos.',
        version: '1.0.0'
    },
    components: {
        schemas: {
            Produto: {
                type: 'object',
                properties: {
                    id: {
                        type: 'string',
                        format: 'uuid'
                    },
                    modelo: {
                        type: 'string'
                    },
                    marca: {
                        type: 'string'
                    },
                    placa: {
                        type: 'string',
                        description: 'Placa do veículo. Deve ser única no sistema.'
                    },
                    ano: {
                        type: 'integer',

                    },
                    valor_diaria: {
                        type: 'number',
                        format: 'float'
                    },
                    status: {
                        type: 'string',
                        enum: [
                            'disponivel',
                            'alugado'
                        ]
                    }
                },
                required: [
                    'id',
                    'modelo',
                    'marca',
                    'placa',
                    'ano',
                    'valor_diaria',
                    'status'
                ]
            },
            ProdutoInput: {
                type: 'object',
                properties: {
                    modelo: {
                        type: 'string'
                    },
                    marca: {
                        type: 'string'
                    },
                    placa: {
                        type: 'string',
                        description: 'Placa do veículo. Deve ser única no sistema.'
                    },
                    ano: {
                        type: 'integer'
                    },
                    valor_diaria: {
                        type: 'number',
                        format: 'float'
                    },
                    status: {
                        type: 'string',
                        enum: [
                            'disponivel',
                            'alugado'
                        ]
                    }
                },
                required: [
                    'modelo',
                    'marca',
                    'placa',
                    'ano',
                    'valor_diaria'
                ]
            },
            Aluguel: {
                type: 'object',
                properties: {
                    id: {
                        type: 'string',
                        format: 'uuid'
                    },
                    cliente_id: {
                        type: 'string',
                        format: 'uuid'
                    },
                    produto_id: {
                        type: 'string',
                        format: 'uuid'
                    },
                    data_inicio: {
                        type: 'string',
                        format: 'date'
                    },
                    data_fim: {
                        type: 'string',
                        format: 'date'
                    }
                },
                required: [
                    'id',
                    'cliente_id',
                    'produto_id',
                    'data_inicio',
                    'data_fim'
                ]
            },
            AluguelInput: {
                type: 'object',
                properties: {
                    cliente_id: {
                        type: 'string',
                        format: 'uuid'
                    },
                    produto_id: {
                        type: 'string',
                        format: 'uuid'
                    },
                    data_inicio: {
                        type: 'string',
                        format: 'date'
                    },
                    data_fim: {
                        type: 'string',
                        format: 'date'
                    }
                },
                required: [
                    'cliente_id',
                    'produto_id',
                    'data_inicio',
                    'data_fim'
                ]
            },
            AluguelResponse: {
                type: 'object',
                properties: {
                    aluguel: {
                        $ref: '#/components/schemas/Aluguel'
                    },
                    produto: {
                        $ref: '#/components/schemas/Produto'
                    }
                },
                required: [
                    'aluguel',
                    'produto'
                ]
            },
            Cliente: {
                type: 'object',
                properties: {
                    id: {
                        type: 'string',
                        format: 'uuid'
                    },
                    nome: {
                        type: 'string'
                    },
                    endereco: {
                        type: 'string'
                    },
                    telefone: {
                        type: 'string'
                    },
                    email: {
                        type: 'string',
                        format: 'email'
                    }
                },
                required: [
                    'id',
                    'nome',
                    'endereco',
                    'telefone'
                ]
            },
            ClienteInput: {
                type: 'object',
                properties: {
                    nome: {
                        type: 'string'
                    },
                    endereco: {
                        type: 'string'
                    },
                    telefone: {
                        type: 'string'
                    },
                    email: {
                        type: 'string',
                        format: 'email'
                    }
                },
                required: [
                    'nome',
                    'endereco',
                    'telefone'
                ]
            },
            Usuario: {
                type: 'object',
                properties: {
                    id: {
                        type: 'string',
                        format: 'uuid'
                    },
                    nome: {
                        type: 'string'
                    },
                    email: {
                        type: 'string',
                        format: 'email'
                    }
                },
                required: [
                    'id',
                    'nome',
                    'email'
                ]
            },
            UsuarioInput: {
                type: 'object',
                properties: {
                    nome: {
                        type: 'string'
                    },
                    email: {
                        type: 'string',
                        format: 'email'
                    },
                    senha: {
                        type: 'string'
                    }
                },
                required: [
                    'nome',
                    'email',
                    'senha'
                ]
            },
            LoginInput: {
                type: 'object',
                properties: {
                    email: {
                        type: 'string',
                        format: 'email'
                    },
                    senha: {
                        type: 'string'
                    }
                },
                required: [
                    'email',
                    'senha'
                ]
            },
            Mensagem: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string'
                    }
                },
                required: [
                    'message'
                ]
            }
        },

        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT'
            }
        }
    },
    paths: {
        '/usuarios/login': {
            post: {
                summary: 'Fazer o login do usuário no sistema',
                description: 'Verifica as credenciais informadas e, caso sejam válidas, gera um token JWT para autenticar o usuário no sistema.',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/LoginInput'
                            }
                        }
                    }
                },
                responses: {
                    '200': {
                        description: 'Login realizado com sucesso',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        token: {
                                            type: 'string'
                                        }
                                    },
                                    required: [
                                        'token'
                                    ]
                                }
                            }
                        }
                    },
                    '401': {
                        description: 'Email ou senha inválidos',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Mensagem'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/usuarios/cadastro': {
            post: {
                summary: 'Fazer o cadastro do usuário no sistema',
                description: 'Recebe as informações do usuário, transforma a senha em hash, cria o usuário no sistema e retorna seu ID, nome e email.',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/UsuarioInput'
                            }
                        }
                    }
                },
                responses: {
                    '201': {
                        description: 'Usuário criado com sucesso',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Usuario'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/Produtos/cadastro': {
            post: {
                summary: 'Fazer o cadastro do produto no sistema',
                description: 'Recebe as informações do produto, faz a verificação para ver se todos os campos preenchidos estão corretos, cria o produto no sistema e retorna seu ID, modelo, marca, placa, ano, valor da diária e status',
                security: [
                    {
                        bearerAuth: []
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/ProdutoInput'
                            }
                        }
                    }
                },
                responses: {
                    '201': {
                        description: 'Produto cadastrado com sucesso',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Produto'
                                }
                            }
                        }
                    },
                    '401': {
                        description: 'Token não informado, autorização malformada ou token inválido',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Mensagem'
                                }
                            }
                        }
                    },
                    '400': {
                        description: 'Dados inválidos na requisição ou placa já cadastrada',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Mensagem'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/Produtos/todosProdutos': {
            get: {
                summary: 'Mostrar todos os produtos cadastrados no sistema',
                description: 'Retorna uma lista com todos os produtos, mostrando seu ID, modelo, marca, placa, ano, valor da diária e status',
                security: [
                    {
                        bearerAuth: []
                    }
                ],

                responses: {
                    '200': {
                        description: 'Mostra todos os produtos',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: {
                                        $ref: '#/components/schemas/Produto'
                                    }
                                }
                            }
                        }
                    },
                    '401': {
                        description: 'Token não informado, autorização malformada ou token inválido',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Mensagem'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/Produtos/deletar/:id': {
            delete: {
                summary: 'Exclui um produto cadastrado no sistema',
                description: 'Apaga do sistema um produto usando o seu id',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        schema: {
                            type: 'string',
                            format: 'uuid'
                        }
                    }
                ],
                security: [
                    {
                        bearerAuth: []
                    }
                ],

                responses: {
                    '200': {
                        description: 'Exclui um produto',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'integer'
                                }
                            }
                        }
                    },
                    '400': {
                        description: 'O id deve ser um UUID válido',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Mensagem'
                                }
                            }
                        }
                    },
                    '404': {
                        description: 'Produto não encontrado',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'integer'
                                }
                            }
                        }
                    },
                    '401': {
                        description: 'Token não informado, autorização malformada ou token inválido',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Mensagem'
                                }
                            }
                        }
                    },
                }
            }
        },
        '/Produtos/editar/:id': {
            put: {
                summary: 'Edita os dados de um produto cadastrado no sistema',
                description: 'Edita no sistema os dados de um produto usando o seu id',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        schema: {
                            type: 'string',
                            format: 'uuid'
                        }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/ProdutoInput'
                            }
                        }
                    }
                },
                security: [
                    {
                        bearerAuth: []
                    }
                ],

                responses: {
                    '200': {
                        description: 'Edita um produto',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Produto'
                                }
                            }
                        }
                    },
                    '400': {
                        description: 'ID inválido ou placa já cadastrada',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Mensagem'
                                }
                            }
                        }
                    },
                    '404': {
                        description: 'Veículo não encontrado',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Mensagem'
                                }
                            }
                        }
                    },
                    '401': {
                        description: 'Token não informado, autorização malformada ou token inválido',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Mensagem'
                                }
                            }
                        }
                    },
                }
            }
        },
        '/Produtos/buscarProdutoId/:id': {
            get: {
                summary: 'Busca os dados de um produto cadastrado no sistema pelo seu ID',
                description: 'Busca no sistema os dados de um produto que corresponda ao id enviado via URL',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        schema: {
                            type: 'string',
                            format: 'uuid'
                        }
                    }
                ],
                security: [
                    {
                        bearerAuth: []
                    }
                ],

                responses: {
                    '200': {
                        description: 'Mostra o produto pesquisado',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Produto'
                                }
                            }
                        }
                    },
                    '400': {
                        description: 'ID inválido',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Mensagem'
                                }
                            }
                        }
                    },
                    '404': {
                        description: 'Produto não encontrado',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    nullable: true
                                }
                            }
                        }
                    },
                    '401': {
                        description: 'Token não informado, autorização malformada ou token inválido',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Mensagem'
                                }
                            }
                        }
                    },
                }
            }
        },
        '/Produtos/buscarProdutoPlaca/:placa': {
            get: {
                summary: 'Busca os dados de um produto cadastrado no sistema pela sua placa',
                description: 'Busca no sistema os dados de um produto que corresponda à placa enviada via URL',
                parameters: [
                    {
                        name: 'placa',
                        in: 'path',
                        required: true,
                        schema: {
                            type: 'string'
                        }
                    }
                ],
                security: [
                    {
                        bearerAuth: []
                    }
                ],

                responses: {
                    '200': {
                        description: 'Mostra o produto pesquisado',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Produto'
                                }
                            }
                        }
                    },
                    '404': {
                        description: 'Produto não encontrado',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    nullable: true
                                }
                            }
                        }
                    },
                    '401': {
                        description: 'Token não informado, autorização malformada ou token inválido',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Mensagem'
                                }
                            }
                        }
                    },
                }
            }
        },
        '/clientes/cadastro': {
            post: {
                summary: 'Fazer o cadastro do cliente no sistema',
                description: 'Recebe as informações do cliente, faz a verificação para ver se todos os campos preenchidos estão corretos, cria o cliente no sistema e retorna seu ID, nome, endereço, telefone e email',
                security: [
                    {
                        bearerAuth: []
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/ClienteInput'
                            }
                        }
                    }
                },
                responses: {
                    '201': {
                        description: 'Cliente cadastrado com sucesso',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Cliente'
                                }
                            }
                        }
                    },
                    '401': {
                        description: 'Token não informado, autorização malformada ou token inválido',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Mensagem'
                                }
                            }
                        }
                    },
                    '400': {
                        description: 'Dados inválidos na requisição',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Mensagem'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/alugueis/cadastro': {
            post: {
                summary: 'Fazer o aluguel do produto no sistema',
                description: 'Recebe as informações do aluguel, faz a verificação para ver se todos os campos preenchidos estão corretos, cria o aluguel no sistema e retorna seu ID, ID do cliente, ID do produto, data do aluguel e data de devolução',
                security: [
                    {
                        bearerAuth: []
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/AluguelInput'
                            }
                        }
                    }
                },
                responses: {
                    '201': {
                        description: 'Aluguel registrado com sucesso',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/AluguelResponse'
                                }
                            }
                        }
                    },
                    '401': {
                        description: 'Token não informado, autorização malformada ou token inválido',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Mensagem'
                                }
                            }
                        }
                    },
                    '400': {
                        description: 'Dados inválidos na requisição ou veículo já está alugado',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Mensagem'
                                }
                            }
                        }
                    },
                    '404': {
                        description: 'Produto ou cliente não encontrado',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Mensagem'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/alugueis/devolverAluguel/:id': {
            put: {
                summary: 'Devolve um produto cadastrado usando o ID de aluguel e deixa o mesmo disponível no sistema',
                description: 'Devolve pro sistema um produto usando o ID do aluguel para que o mesmo possa ser alugado novamente',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        schema: {
                            type: 'string',
                            format: 'uuid'
                        }
                    }
                ],
                security: [
                    {
                        bearerAuth: []
                    }
                ],

                responses: {
                    '200': {
                        description: 'Devolve um produto',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/AluguelResponse'
                                }
                            }
                        }
                    },
                    '400': {
                        description: 'O id é obrigatório ou O id deve ser um UUID válido',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Mensagem'
                                }
                            }
                        }
                    },
                    '404': {
                        description: 'Esse id não existe',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Mensagem'
                                }
                            }
                        }
                    },
                    '401': {
                        description: 'Token não informado, autorização malformada ou token inválido',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Mensagem'
                                }
                            }
                        }
                    },
                }
            }
        },
    }
}
export default swaggerDocument