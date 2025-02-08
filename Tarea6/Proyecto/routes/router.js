const products = [
    { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics' },
    { id: 2, name: 'Chair', price: 49.99, category: 'Furniture' },
    { id: 3, name: 'Pen', price: 1.99, category: 'Stationery' }
];
const handleRequest = async (req, res) => {
    
const {url, method} = req
    
let body='';
    req.on('data', (chunk) => {
        console.log(chunk.toString())
        body += chunk.toString();
    })

    req.on('end', () => {
        console.log("1 url: ",url.split('/'))
        const path = url.split('/')[1]
        const id = url.split('/')[2]
        try {
            if(path === 'products'){
                if(method === 'GET' && !id){
                    res.writeHead(200)
                    res.end(JSON.stringify(products))
                    console.log("2 path: ",path)
                }
                if(method === 'GET' && id){
                    res.writeHead(200)
                    const productoSeleccionado = products.find((product) => {
                        return product.id === parseInt(id)
                    })
                    res.end(JSON.stringify(productoSeleccionado))
                    console.log("3, id: ",id)
                    console.log("4",productoSeleccionado)
                }
                if (method === 'POST' && 'add') {
                            let newProduct = JSON.parse(body);
                            const newId = products.length+1;
                            newProduct = {id: newId, ...newProduct};
                            products.push(newProduct);
                            res.writeHead(201,{ 'Content-Type': 'application/json' });
                            res.end(`Producto Agregado: ${JSON.stringify(newProduct)}`);
                            console.log("6",newProduct);
                            console.log("7",products);
                    }
                if(method === 'PUT'){
                    res.writeHead(200, {'Content-Type': 'text/plain'})
                    res.end('Producto actualizado')
                }
                if(method === 'DELETE'){
                    res.writeHead(200, {'Content-Type': 'text/plain'})
                    res.end('Producto eliminado')
                }
            }else if(path === 'calzado'){
                res.writeHead(200, {'Content-Type': 'text/plain'})
                res.end('calzado')
            } 
            else {
                res.writeHead(404)
                res.end('No encontramos esa ruta') 
            }
           
        } catch (error) {
            console.log(error)
            res.writeHead(500)
            res.end('No encontramos esa ruta') 
        }
    })
}

export default handleRequest;