package com.flaviaschu.fsdelivery.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.flaviaschu.fsdelivery.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
