package com.flaviaschu.fsdelivery.services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.flaviaschu.fsdelivery.dto.OrderDTO;
import com.flaviaschu.fsdelivery.dto.ProductDTO;
import com.flaviaschu.fsdelivery.entities.Order;
import com.flaviaschu.fsdelivery.entities.OrderStatus;
import com.flaviaschu.fsdelivery.entities.Product;
import com.flaviaschu.fsdelivery.repositories.OrderRepository;
import com.flaviaschu.fsdelivery.repositories.ProductRepository;

@Service
public class OrderService {
	
	@Autowired
	private OrderRepository repository;
	
	@Autowired
	private ProductRepository productRepository;
	
	@Transactional(readOnly = true)
	public List<OrderDTO> finAll(){
		List<Order> list = repository.findOrdersWithProducts();
		return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
		
	}
	
	@Transactional
	public OrderDTO insert(OrderDTO dto){
		Order order = new Order(null, dto.getAddress(), dto.getLatitude(), dto.getLongitude(), 
				Instant.now(), OrderStatus.PENDING);
		for (ProductDTO p : dto.getProducts()){
			
			Product product = productRepository.getOne(p.getId());
			order.getProducts().add(product);				
		}
		order = repository.save(order);
		return new OrderDTO(order);
	}
	
}
