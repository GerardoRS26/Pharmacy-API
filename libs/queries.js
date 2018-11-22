'use strict';

exports.getProducts = ` SELECT  
                            c.name AS 'Categoria',
                            p.reference as 'Referencia',
                            p.name 'Nombre',
                            p.pricebuy as 'Precio de Compra',
                            p.pricesell as 'Precio de venta',
                            SUM(s.units) as 'Unidades'
                        FROM products p
                        INNER JOIN categories c ON c.id = p.category
                        INNER JOIN stockcurrent s  ON s.product = p.id
                        INNER JOIN locations l ON  s.location = l.id
                        GROUP BY s.product
                        ORDER BY c.name, p.name;`;